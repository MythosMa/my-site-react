import { makeAutoObservable } from "mobx";
import { RootStore } from "./index";

export class CounterStore {
  count: number = 0;
  root: RootStore;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  hydrate(data: number) {
    this.count = data;
  }
}
