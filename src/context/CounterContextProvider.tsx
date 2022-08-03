import React, { ChangeEvent, PropsWithChildren, useState } from "react";

const LS_PRICES = "ls_prices";

interface IValues {
  v: number;
  s: number | string;
  h: number | string;
  sand: number;
  cement: number;
  fibra: number;
  sandCost: number;
  cementCost: number;
  fibraCost: number;
  delivery: number;
  porters: number;
  massa: number;
  deliveryCount: number;
  price: number;
  workPrice: number;
  pricePerMeter: number;
}

interface ICommon {
  isShowPrice: boolean;
}

interface IPrices {
  sand: number;
  cement: number;
  fibra: number;
  delivery: number;
  porters: number;
  minFullWorkerCost: number;
  workPrice: number;
}

interface IActions {
  changeS: (event: ChangeEvent<HTMLInputElement>) => void;
  changeH: (event: ChangeEvent<HTMLInputElement>) => void;
  showPrice: () => void;
  setWorkPriceFromTable: (event: ChangeEvent<HTMLInputElement>) => void;
  changePrices: (prices: IPrices) => void;
}

interface ICountContext {
  values: IValues;
  actions: IActions;
  common: ICommon;
  prices: IPrices;
}

const initPrices: IPrices = {
  sand: 45,
  cement: 380,
  fibra: 300,
  delivery: 2500,
  porters: 800,
  minFullWorkerCost: 22000,
  workPrice: 450,
};

export const CountContext = React.createContext({} as ICountContext);

const CounterContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [s, setS] = useState<string | number>("");
  const [h, setH] = useState<string | number>("");

  const [isShowPrice, setShowPrice] = useState(false);

  const pricesFromLs = window.localStorage.getItem(LS_PRICES);

  const [prices, setPrices] = useState(
    pricesFromLs ? JSON.parse(pricesFromLs) : initPrices
  );

  const [workPrice, setWorkPrice] = useState<number | "">(prices.workPrice);

  const v = (Number(s) * Number(h)) / 1000;
  const sand = Math.round(v * 50);
  const cement = Math.round(v / 0.2);
  const fibra = Math.round(v);
  const sandCost = sand * prices.sand;
  const cementCost = cement * prices.cement;
  const fibraCost = fibra * prices.fibra;
  const deliveryCount = Math.ceil(sand / 120);
  const delivery = deliveryCount * prices.delivery;
  const massa = (sand * 32 + cement * 50) / 1000;
  const porters = massa * prices.porters;

  const price =
    porters +
    delivery +
    fibraCost +
    cementCost +
    sandCost +
    Number(workPrice) * Number(s);

  const pricePerMeter = Math.ceil(price / Number(s));

  const common = { isShowPrice: isShowPrice };

  const values = {
    v,
    s,
    h,
    sand,
    cement,
    fibra,
    sandCost,
    cementCost,
    fibraCost,
    delivery,
    porters,
    massa,
    deliveryCount,
    price: Math.ceil(price),
    pricePerMeter,
    workPrice: Number(workPrice),
  };
  const actions = {
    changeS: (event: ChangeEvent<HTMLInputElement>) => {
      setShowPrice(false);
      if (!event.target.value) {
        setS("");
        return;
      }
      setS(Number(event.target.value));
    },
    changeH: (event: ChangeEvent<HTMLInputElement>) => {
      setShowPrice(false);
      if (!event.target.value) {
        setH("");
        return;
      }
      setH(Number(event.target.value));
    },
    showPrice: () => setShowPrice(true),
    setWorkPriceFromTable: (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.value) {
        setWorkPrice("");
        return;
      }
      setWorkPrice(Number(event.target.value));
    },
    changePrices: (prices: IPrices) => {
      window.localStorage.setItem(LS_PRICES, JSON.stringify(prices));
      setPrices(prices);
    },
  };

  return (
    <CountContext.Provider value={{ values, actions, common, prices }}>
      {children}
    </CountContext.Provider>
  );
};

export default CounterContextProvider;
