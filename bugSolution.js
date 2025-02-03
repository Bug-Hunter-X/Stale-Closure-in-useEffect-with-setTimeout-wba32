```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Use a functional update to capture the latest count value
    const timeoutId = setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearTimeout(timeoutId); // Cleanup function
  }, []); // Empty dependency array ensures this effect only runs once

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```