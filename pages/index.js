import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>WTG Interview Challenge</h1>
      <hr />
      <ol>
        <li>Fork this workspace into your Stackblitz account</li>
        <li>
          Create an API endpoint (in <code>/pages/api/get-token</code>) using
          Next.js API Route to <code>GET</code> data from{" "}
          <code>collection-payload.json</code>
        </li>
        <li>
          Recreate a simple version of this table in{" "}
          <code>/pages/tokens.js</code> using the data payload from endpoint you
          just created with all graphic assets (png, svg, and colors) provided
          <ul>
            <li>Ignore Price, Above Floor and Listed At columns</li>
            <li>Place Buy now button in every row</li>
          </ul>
          <a
            href="https://media.discordapp.net/attachments/903497492878999602/1006808164567625798/sample-design.png?width=1080&height=552"
            target="_blank"
          >
            <img
              src="https://media.discordapp.net/attachments/903497492878999602/1006808164567625798/sample-design.png?width=1080&height=552"
              alt="Sample Design"
              style={{ objectFit: "contain" }}
            />
          </a>
        </li>
      </ol>

      <h2>Assets</h2>
      <hr />
      <ul>
        <li>
          Buy now button
          <br />
          <code>
            https://media.discordapp.net/attachments/903497492878999602/1006808141389910046/buynow-button.png
          </code>
          <br />
          <img
            src="https://media.discordapp.net/attachments/903497492878999602/1006808141389910046/buynow-button.png"
            alt="Buy now button"
          />
        </li>
        <li>
          SVG icons are in <code>/svgs</code>
        </li>
        <li>
          Colors are listed as CSS variables in <code>styles/globals.css</code>
        </li>
      </ul>
    </div>
  );
}
