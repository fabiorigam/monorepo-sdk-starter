import { ethers } from "ethers";

console.log("Hello from core package")

const eth = ethers.parseEther("1.0");
console.log(eth.toString());

export const add = (a: number, b: number) => {
    return a + b
}

export const subtract = (a: number, b: number) => {
    return a - b
}