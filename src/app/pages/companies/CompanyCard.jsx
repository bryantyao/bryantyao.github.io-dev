import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import CompanyDialog from './CompanyDialog.jsx';

export class CompanyCard extends Component {
  constructor(props) {
    super(props);
    this.state = { openDialog: false };
  }

  render() {
    const { company, description, learn_more:LearnMore, skills, year_start, year_end, ...other } = this.props;
    const headline = `${company} (${year_start}-${year_end})`;
    const chips = skills.map((skill, i) => (<Chip key={i} label={skill} />));
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
          <Button
            dense
            onClick={() => this.dialog.open()}
          >
            Learn More
          </Button>
          <CompanyDialog
            open={false}
            ref={(el) => this.dialog = el}
          >
            {LearnMore && <LearnMore title={company}/>}
          </CompanyDialog>
        </CardActions>
      </Card>
    );
  }
}
export default CompanyCard;

