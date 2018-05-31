import * as React from 'react';

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
          <MeCard />
        </div>
      </div>
    );
  }
}

export default App;
