# Stale Closure Bug in React useEffect

This repository demonstrates a common error in React applications involving stale closures within `useEffect` hooks.  The problem arises when using asynchronous operations (like `setTimeout`) inside an effect that depends on a state variable.

## Bug Description
The counter component is intended to increment every second.  However, due to a stale closure, the `setTimeout` callback always uses the initial value of `count`, resulting in unexpected and inconsistent increments. 

## How to Reproduce
1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Observe the inconsistent increments in the counter.

## Solution
The solution involves using the functional update form of `setCount` to ensure the latest value of `count` is used within the `setTimeout` callback.  The solution is provided in `bugSolution.js`.