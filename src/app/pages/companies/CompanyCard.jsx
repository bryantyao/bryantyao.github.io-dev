import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

export class CompanyCard extends Component {
  render() {
    const { company, description, learn_more_component, skills, year_start, year_end, ...other } = this.props;
    const headline = `${company} (${year_start}-${year_end})`;
    const chips = skills.map((skill) => (<Chip label={skill} />));
    return (
      <Card {...other}>
        <CardContent>
          <Typography className="mb-3" type="headline" component="h2">
            {headline}
          </Typography>
          <div className="skills d-flex flex-wrap mb-3">
            {chips}
          </div>
          <Typography component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense>Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}
export default CompanyCard;

