import React, { Component } from 'react';
import Resume from 'app/pages/Resume';
import Page from 'app/pages/layouts/Page';
import Chip from 'material-ui/Chip';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

export class Experience extends Component {
  render() {
    const { className, ...other } = this.props;
    return (
      <Page className={`experience ${className || ''}`} {...other} title='Experience'>
        <div>
          <Resume className='mb-3' />
          <Card className="mb-3" raised={false}>
            <CardContent>
              <Typography className="mb-3" type="headline" component="h2">
                Health Fidelity (2014-2016)
              </Typography>
              <Typography component="p">
                <div className="skills d-flex flex-wrap mb-3">
                  <Chip label="Chef" />
                  <Chip label="Jenkins" />
                  <Chip label="jQuery" />
                  <Chip label="MySQL" />
                  <Chip label="Ruby" />
                  <Chip label="Ruby on Rails" />
                </div>
                <p>Health Fidelity blurb</p>
              </Typography>
            </CardContent>
            <CardActions>
              <Button dense>Learn More</Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className="mb-3" raised={false}>
            <CardContent>
              <Typography className="mb-3" type="headline" component="h2">
                IBM (2012-2014)
              </Typography>
              <Typography component="p">
                <div className="skills d-flex flex-wrap mb-3">
                  <Chip label="Apache Derby" />
                  <Chip label="Dojo Toolkit" />
                  <Chip label="Equinox OSGi" />
                  <Chip label="Java" />
                  <Chip label="WAS Liberty" />
                </div>
                <p>Health Fidelity blurb</p>
              </Typography>
            </CardContent>
            <CardActions>
              <Button dense>Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </Page>
    );
  }
}
export default Experience;

