import React, { useState } from "react";

import ColorfullMessage from "./components/ColorfullMessage";
import My from "./components/My";
import Test from "./components/Test";
import A from "./components/A";

export const App = () => {
  console.log("最初");

  const [num, setNum] = useState(1980);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  const [result, setResult] = useState(1);

  const onClick = () => {
    alert("警告です");
  };

  const aaa = () => {
    console.log("出来ました");
  };

  const yyy = () => {
    alert("これはやばい");
  };

  const reiko = {
    color: "pink",
    fontWeight: "bold",
    border: "1px solid #999",
    backgroundColor: "red"
  };
  const keiji = {
    color: "green",
    textShadow: "5px 5px 1px #678"
  };

  const goDoit = () => {
    alert("確認");
  };
  const button = () => {
    alert("ボタンが押されました");
  };
  const goSite = () => {
    alert("ゴーサイト");
  };

  const test = () => {
    alert("こんにちは");
  };
  const oooo = () => {
    alert("出来ましたか？");
  };

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickCountDown = () => {
    setNum(num - 1);
  };
  const onClickCountB = () => {
    setNum(num * num);
  };

  const changeFace = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  const goButton = {
    color: "pink",
    backgroundColor: "blue"
  };

  const toshiakiButton = () => {
    setResult(result + 1);
  };

  return (
    <>
      <h1 style={{ color: "red", border: "3px solid #999" }}>{result}</h1>
      <button style={goButton} onClick={toshiakiButton}>
        変化するボタン
      </button>
      <p>{num}</p>

      {faceShowFlag && <p>( ◠‿◠ )</p>}

      <button onClick={changeFace}>表示/非表示</button>

      <br />
      <br />
      <br />

      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickCountDown}>カウントダウン</button>
      <button onClick={onClickCountB}>乗算</button>

      <button onClick={oooo}>
        さようなら、こんにちは、こんばんわ、ごきげんよう
      </button>
      <button onClick={goSite}>送信</button>
      <button onClick={test}>こんにちは</button>
      <A color="#955" fontSize="30px">
        本日の行動はどこに行こうかな
      </A>
      <Test color="blue" font="40px" border="3px dotted #498">
        明日は光ヶ丘
      </Test>
      <Test color="pink" border="1px solid #666">
        今度は違うテキストになります
      </Test>
      <Test color="red" font="18px">
        こんばんは。最近の出来事は大変です
      </Test>
      <button onClick={goDoit}>こちらを押してください</button>

      <h1 style={{ border: "1px solid #999" }}>吹越俊明</h1>
      <p style={{ color: "blue", fontSize: "40px" }}>こんにちは</p>
      <button onClick={onClick} style={{ color: "red" }}>
        押してください
      </button>
      <button onClick={aaa} style={{ borderRadius: "50%" }}>
        こんにちは
      </button>
      <button onClick={yyy}>危険です</button>
      <p style={reiko}>礼子ちゃん</p>
      <p style={keiji}>敬治</p>
      <ColorfullMessage />
      <My color="blue">テストが待ちどうしい</My>
      <button onClick={button}>ボタン</button>
    </>
  );
};
