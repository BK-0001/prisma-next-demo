export default function TakeLongTime() {
  const result: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved after 5 seconds");
    }, 5000);
  });

  return <div className="flex-1 border p-4">{result}</div>;
}
