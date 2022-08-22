import { useNativeBalance } from "hooks/useNativeBalance";
import { useEffect, useState} from "react";
import { n4 } from "helpers/formatters";
import { getAccountBalance} from "../near-api";

function NativeBalance(props) {
  const [balance, setBalance] = useState(0)

  getAccountBalance().then(balance => {
    setBalance(balance)
  })
  let nativeName = "NEAR"

  return (
    <div style={{ textAlign: "center", whiteSpace: "nowrap" }}>{balance} {nativeName}</div>
  );
}

export default NativeBalance;
