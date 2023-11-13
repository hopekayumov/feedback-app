import {  useRoutes } from "react-router-dom";
import paths from "./path";

const Routes = () => {
    return useRoutes(
        paths.map(({ path, element, children }) => {
            return {
                path: '/' + path,
                element,
                children: children?.map((child) => ({
                    path: child.path,
                    element: child.element,
                })),
            };
        })
    );
};

export default Routes;