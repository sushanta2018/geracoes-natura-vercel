import {
  useState,
  useContext,
  createContext,
  useCallback,
  useEffect,
} from "react";

const CalculationProviderContext = createContext();

export function useCalculationProvider() {
  return useContext(CalculationProviderContext);
}

export default function CalculationProvider({ children }) {
  const [totalProfit, setTotalProfit] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);

  const [totalearn, setTotalEarn] = useState(500);
  const [collectItem, setCollectItem] = useState([]);

  function handleToggleItem(item) {
    setCollectItem((prevItems) => {
      const exists = prevItems.find((i) => i.id === item.id);
      if (exists) {
        return prevItems.filter((i) => i.id !== item.id);
      } else {
        return [...prevItems, item];
      }
    });
  }

  const handleIncrement = () => {
    setTotalEarn(totalearn + 100);
  };

  const handleDecrement = () => {
    if (totalearn > 100) {
      setTotalEarn(totalearn - 100);
    }
  };

  const calculateQuantities = useCallback(
    (goal, products) => {
      let totalRevenue = 0;
      let updatedProducts = [];
      let percent = "0.20";

      // Calculate the average cost per product
      const sales100Percent  = goal / percent;

      // Initial pass to distribute quantities based on the average cost
      products.forEach((product) => {
        let p = sales100Percent / products.length;

        // Ensure at least 1 quantity
        let quantityNeeded = Math.max(Math.floor(p / product.price), 1);

        let productRevenue = quantityNeeded * product.price;
        let productProfit = productRevenue * percent; // 20% profit

        updatedProducts.push({
          ...product,
          quantityNeeded: quantityNeeded,
          profit: productProfit,
          totalSales: productRevenue,
        });

        totalRevenue += productRevenue;
      });

      // Sort by difference from average cost to adjust quantities more evenly
      updatedProducts.sort((a, b) => {
        const diffA = sales100Percent  - a.quantityNeeded * a.price;
        const diffB = sales100Percent  - b.quantityNeeded * b.price;
        return diffA - diffB;
      });

      // Adjust quantities to ensure total meets or exceeds the goal
      let totalProfit = totalRevenue * percent;
      for (let i = 0; totalProfit < goal && i < updatedProducts.length; i++) {
        let product = updatedProducts[i];
        product.quantityNeeded += 1;
        product.totalSales += product.price;
        product.profit = product.totalSales * percent;
        totalRevenue += product.price;
        totalProfit = totalRevenue * percent;
      }

      // Set the states with the updated values
      setTotalMoney(totalProfit);
      setTotalProfit(
        updatedProducts.reduce((acc, product) => acc + product.profit, 0)
      );
      setCollectItem(updatedProducts);
    },
    [totalearn, totalMoney]
  );

  const recalculateTotals = useCallback(() => {
    const totalRevenue = collectItem.reduce(
      (acc, item) => acc + item.totalSales,
      0
    );
    const totalProfit = collectItem.reduce((acc, item) => acc + item.profit, 0);

    setTotalMoney(totalRevenue);
    setTotalProfit(totalProfit);
  }, [collectItem]);

  // Adjust individual product quantity and then recalculate totals
  const adjustQuantity = (productId, increment) => {
    setCollectItem((prevItems) => {
      const newItems = prevItems.map((item) => {
        if (item.id === productId) {
          const adjustment = increment ? 1 : -1;
          const newQuantity = Math.max(item.quantityNeeded + adjustment, 1);
          const newTotalSales = newQuantity * item.price;
          const newProfit = newTotalSales * 0.2; // 20% profit
          return {
            ...item,
            quantityNeeded: newQuantity,
            totalSales: newTotalSales,
            profit: newProfit,
          };
        }
        return item;
      });

      recalculateTotals(); // Recalculate totals after updating items
      return newItems;
    });
  };

  // Use an effect to react to changes in totalearn and recalculate the quantities
  useEffect(() => {
    // Trigger only when total earning goal changes.
    setCollectItem((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        const quantityNeeded = Math.floor(
          totalearn / (prevItems.length * item.price)
        );
        const totalSales = quantityNeeded * item.price;
        const profit = totalSales * 0.2;
        return {
          ...item,
          quantityNeeded,
          totalSales,
          profit,
        };
      });
      recalculateTotals(); // Recalculate totals after setting new items
      return updatedItems;
    });
  }, [totalearn]);

  // Use an effect to react to changes in collectItem and recalculate totals
  useEffect(() => {
    calculateQuantities(totalearn, collectItem);
  }, [totalearn]);

  const value = {
    collectItem,
    setCollectItem,
    handleToggleItem,
    totalearn,
    setTotalEarn,
    handleIncrement,
    handleDecrement,
    calculateQuantities,
    totalMoney,
    totalProfit,
    adjustQuantity,
  };

  return (
    <CalculationProviderContext.Provider value={value}>
      {children}
    </CalculationProviderContext.Provider>
  );
}
