import { useState, useEffect } from "react";
import { EtherScanIcon, LooksRareIcon, OpenseaIcon, X2Y2Icon } from "../svgs";
import styles from "../styles/Home.module.css";

const Tokens = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [metadata, setMetadata] = useState(null);

  // call API
  function get() {
    setIsLoading(true);
    fetch("https://nextjs-f9rffd--3000.local.webcontainer.io/api/get-token")
      .then((raw) => raw.json())
      .then((resp) => {
        setData(resp.data);
        setMetadata(resp.pagination);
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  }

  function getIcon(keyName, link = null) {
    switch (keyName) {
      case "opensea":
        return (
          <a href={link} target={"_new"}>
            <OpenseaIcon width={16} height={16} />
          </a>
        );
      case "looksrare":
        return (
          <a href={link} target={"_new"}>
            <LooksRareIcon width={16} height={16} />
          </a>
        );
      case "x2y2":
        return (
          <a href={link} target={"_new"}>
            <X2Y2Icon width={16} height={16} />
          </a>
        );
      case "etherscan":
      default:
        <a href={link} target={"_new"}>
          <EtherScanIcon width={16} height={16} />
        </a>;
        return null;
    }
  }

  useEffect(() => {
    // query data from your API here
    get();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Tokens Table!</h1>

      {/* your table implementation goes here */}
      <table width={"100%"}>
        <thead>
          <tr>
            <td></td>
            <td>ID</td>
            <td>Rank</td>
            <td>Buy</td>
            <td>Links</td>
            <td>Traits</td>
          </tr>
        </thead>
        <tbody>
          {data.map((x, i) => {
            return (
              <tr key={i}>
                <td>
                  <img
                    src={x?.image.replace("ipfs://", "https://ipfs.io/ipfs/")}
                    width={24}
                    height={24}
                    className={"thumbnail-image"}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = "https://via.placeholder.com/24";
                    }}
                  />
                </td>
                <td>#{x?.id ?? 0}</td>
                <td>
                  <div className={"rank"}>{x?.rank ?? 0}</div>
                </td>
                <td>
                  <a href={"#"}>
                    <img
                      src={
                        "https://media.discordapp.net/attachments/903497492878999602/1006808141389910046/buynow-button.png"
                      }
                      height={24}
                    />
                  </a>
                </td>
                <td>
                  {Object.keys(x?.links).map((link, index) => {
                    return <i key={index}>{getIcon(link, x?.links[link])} </i>;
                  })}
                </td>
                <td>
                  {(x?.attributes ?? []).map((trait, index) => {
                    const _vars = [
                      "--gradient-trait-1",
                      "--gradient-trait-2",
                      "--gradient-trait-3",
                      "--gradient-trait-4",
                      "--gradient-trait-5",
                      "--gradient-trait-6",
                    ];
                    return (
                      <span
                        key={index}
                        className={"trait"}
                        style={{
                          background: `var(${
                            _vars[index % (_vars.length - 1)]
                          })`,
                        }}
                      >
                        {trait?.trait_type}: <b>{trait?.value}</b>
                      </span>
                    );
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tokens;
