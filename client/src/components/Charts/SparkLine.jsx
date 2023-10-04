import React from 'react';
import './Sparkline.css'
import prenatal_care from '../../assets/prenatal_care.png'
import baby from '../../assets/baby.png'

class SparkLine extends React.PureComponent {
  render() {
    const { person } = this.props;

    return (
      <div class="apptcard"><img style={{"height":"180px"}} src={(person==="mother")?prenatal_care:baby}  alt="hello" />
      {person==="mother"?"For mothers":"For child"}</div>
    );
  }
}

export default SparkLine;
