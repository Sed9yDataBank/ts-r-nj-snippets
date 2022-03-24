import { NextPage } from "next";

interface testProps {}

export const test: NextPage<testProps> = () => {
  return <div></div>;
};

// import React from 'react'

// interface testProps {

// }

// export const test: React.FC<testProps> = ({}) => {
//         return ();
// }

// import React from 'react'

// interface testProps {

// }

// export const test: React.VFC<testProps> = ({}) => {
//         return ();
// }

// import React from 'react'

// interface testProps {

// }

// export const test = ({}: testProps): JSX.Element => (
//         <div>

//         </div>
// )
