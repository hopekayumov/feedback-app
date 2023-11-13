import { ReactElement } from "react";

type Path = {
    path: string;
    element: ReactElement;
    private: boolean;
};

type PathType = {
    children?: Path[];
} & Path;

const paths: PathType[] = [
    {
        path: "/",
        element: <Home />,
        private: false,
    },
];

export default paths;