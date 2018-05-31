import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GithubCircle from 'mdi-material-ui/GithubCircle'
import TwitterCircle from 'mdi-material-ui/TwitterCircle'
import * as React from 'react';

import me from './assets/me.jpg';

const style = {
  card: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '90.25%', // 16:9
  },
};

class MeCard extends React.Component {
  public render() {
    return (
      <div>
        <Card style={style.card}>
          <CardMedia
            style={style.media}
            image={me}
            title="Colton Morris looking a lot like Colton Morris"
          />
          <CardContent>
            <Typography variant="display1" gutterBottom={true}>
              Yo
            </Typography>
            <Typography component="p">
              This is my personal workspace. You can find my blog, photos, videos, and projects I work on.
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="https://github.com/coltonmorris">
              <GithubCircle style={{fontSize:"60px"}}/>
            </Button>
            <Button href="https://twitter.com/King_Coolton">
              <TwitterCircle style={{color:"#1DA1F2",fontSize:"60px"}}/>
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default MeCard;
