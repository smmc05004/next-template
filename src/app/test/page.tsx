const API_DOMAIN = process.env.NEXT_PUBLIC_API_URL;

const TestPage = () => {
  return (
    <div>
      <h1>Test Page</h1>
      <p>This is a test page.</p>
      <div>env 설정값{API_DOMAIN}</div>
    </div>
  );
};

export default TestPage;
