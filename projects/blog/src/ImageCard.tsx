import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import * as React from 'react';

const style = {
  card: {
    height: 'auto',
    width: '500px',
  },
  media: {
    height:0,
    paddingTop: '56.25%', // 16:9
  },
};

interface IStateTypes {
  image: string
}

class ImageCard extends React.Component<IStateTypes> {
  public render() {
    return (
      <div>
        <Card style={style.card}>
          <CardMedia
            style={style.media}
            image={this.props.image}
            title="TODO update later"
          />
        </Card>
      </div>
    );
  }
}

export default ImageCard;
