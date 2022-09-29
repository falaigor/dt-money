import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useCallback,
} from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

interface CreateTransactionData {
  description: string;
  category: string;
  price: number;
  type: "income" | "outcome";
}

interface TransactionsContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionData) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    try {
      const response = await api.get("transactions", {
        params: {
          _sort: "createdAt",
          _order: "desc",
          q: query,
        },
      });

      setTransactions(response.data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const createTransaction = useCallback(async (data: CreateTransactionData) => {
    try {
      const { description, category, price, type } = data;

      const response = await api.post("transactions", {
        description,
        category,
        price,
        type,
        createdAt: new Date(),
      });

      setTransactions((state) => [response.data, ...state]);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
