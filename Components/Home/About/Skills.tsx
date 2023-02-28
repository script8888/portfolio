import ReactJsIco from "../../svg/ReactJsIco";
import NextJsIco from "../../svg/NextJsIco";
import TypeScriptIco from "../../svg/TypeScriptIco";
import JavascriptIco from "../../svg/JavascriptIco";
import ReduxIco from "../../svg/ReduxIco";
import FireBaseIco from "../../svg/FireBaseIco";
import SolidityIco from "../../svg/SolidityIco";
import MongoDbIco from "../../svg/MongoDbIco";
import * as React from "react";
import Web3JsIco from "../../svg/Web3Js";
import BootstrapIco from "../../svg/BootstrapIco";

type ObjectField = {
  id: number;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  name: string;
  class?: String;
};

export const skills: ObjectField[] = [
  {
    id: 1,
    icon: (props: React.SVGProps<SVGSVGElement>) => <NextJsIco {...props} />,
    name: "Next Js",
    class: `nextIco`,
  },
  {
    id: 5,
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <JavascriptIco {...props} />
    ),
    name: "JavaScript",
  },
  {
    id: 6,
    icon: (props: React.SVGProps<SVGSVGElement>) => <FireBaseIco {...props} />,
    name: "Firebase",
  },
  {
    id: 4,
    icon: (props: React.SVGProps<SVGSVGElement>) => <ReactJsIco {...props} />,
    name: "React Js",
  },
  {
    id: 3,
    icon: (props: React.SVGProps<SVGSVGElement>) => <ReduxIco {...props} />,
    name: "Redux",
  },
  {
    id: 7,
    icon: (props: React.SVGProps<SVGSVGElement>) => <SolidityIco {...props} />,
    name: "Solidity",
    class: `solidityIco`,
  },
  {
    id: 2,
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <TypeScriptIco {...props} />
    ),
    name: "TypeScript",
  },
  {
    id: 8,
    icon: (props: React.SVGProps<SVGSVGElement>) => <MongoDbIco {...props} />,
    name: "MongoDB",
  },
  {
    id: 9,
    icon: (props: React.SVGProps<SVGSVGElement>) => <Web3JsIco {...props} />,
    name: "Web3 Js",
  },
  {
    id: 10,
    icon: (props: React.SVGProps<SVGSVGElement>) => <BootstrapIco {...props} />,
    name: "Bootstrap",
  },
];
