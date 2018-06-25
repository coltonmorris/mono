import * as React from 'react';

import ImageCard from './ImageCard';
import MeCard from './MeCard';
import Topbar from './Topbar';

// interface IPropTypes {
  // template?: object;
  // saveTemplate: (template: object) => void;
  // close: () => void;
  // t: (text: string) => string;
// }

interface IStateTypes {
  open: boolean;
}

class App extends React.Component <{}, IStateTypes> {
  constructor(props:any) {
    super(props);

    this.state = {
      open: false,
    };
  }

  public render() {
    return (
      <div className="App">
        <Topbar />
        <div style={{marginTop:"10px",marginLeft:"400px"}}>
          <ImageCard image={"https://00e9e64bac229e2d10ca0d27be6498c8cbe1fa1fd08757c714-apidata.googleusercontent.com/download/storage/v1/b/colton.me/o/Snapchat-290116217.jpg?qk=AD5uMEsaBUBFYfDdFt_vzAipduT5oA7bjZ_B-xsUhKo-ReA_m8IUu3csqarB_pows4g1td5MaDZDP-sbwiAvHUvFqdWXXPL487WmGNrC7PN3UqyB7VpZhiKg51Y1NIEzYsWbRgTXLpqx1eUhfRlmMy3zJCro7kUXtSmRgEljkS8acl56I3LxxGLdbNstjpIdFxIQC2xkq6Fy08ztmamL0hmbIhdOJxRuJwhXhsJhcrH6N13qvw1OVjhDmklxiCWpdvn1R1ODHt9DAHDGbQtlkas9LNrg_JTHhRoa6wJCCK3wHF1pphXqlraHcnNNKSSSY1b4DOCEANabxPvMO-m2rOxD2sFNH8iOGdfSOrl4O2-2j4HbPCXxidY-QLjHXdMzg4-nbRIaY1DmBDaKLN7UaMt9R6CCblQgJ6CPTUStk0JUxo7EqT4GnmIpEC4owGSxP47GPzecfSmh_1P_5dF_PwXl9Ku2Wk8jzjTucBwUKcos6scyLwyzNU0Io2MpnrPswtSJ1j1zJWr65QueBH4UT_OLPbFARwJcaRU8BboQY_Rc2ih436qPR9SAHFBd6a61QYivYvuexy99wPXytsICaiuprUJi_Yhp-JL615z-PyNbcB0HeV0_A1IrhSsnzztGNZv3__S-YmMie8yv78QnSExl4xoJk4xxc3YOabIaiMsr5TM2d_kDqK-e3jJzgk6MkG2tWPd3NqdU2dP67yWj995U55rm5YJpC183Y44aW9yO_uvpTNGwisA"}/>
          <MeCard />
        </div>
      </div>
    );
  }
}

export default App;
