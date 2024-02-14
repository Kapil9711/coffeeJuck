import CopyWrite from "./navigation/CopyWrite";
export default function Numbers() {
  return (
    <>
      <h2>Our Stores</h2>
      <table
        style={{
          border: `3px solid black`,
          padding: "20px",
          verticalAlign: "middle",
        }}
      >
        <tr>
          <th style={{ width: "90px" }}>City</th>
          <th style={{ width: "90px" }}>Chikago</th>
          <th style={{ width: "90px" }}>New York</th>
          <th style={{ width: "90px" }}>Los Angles</th>
        </tr>
        <tr>
          <td>orders</td>
          <td>125</td>
          <td>250</td>
          <td>500</td>
        </tr>
        <tr>
          <td>profit</td>
          <td>$ 10,000</td>
          <td>$ 20,000</td>
          <td>$ 30,000</td>
        </tr>
      </table>
      <CopyWrite />
    </>
  );
}
