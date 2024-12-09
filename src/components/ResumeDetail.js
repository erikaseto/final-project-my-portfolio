import React from "react";
const resumeData = "./models/resume.json";

class ResumeDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = { resumeList: [] }
    }

    componentDidMount(){
        fetch(resumeData)
        .then(res => res.json())
        .then( data => this.setState({ resumeList : data }))
        .catch( err => console.log(err))
    }

  
    render(){
      return (
          <div className="resume-list">
          <h2>Resume</h2>
               {/*List rendering */}
              {this.state.resumeList.map( resume => (
                  <div key={resume.id} className="resume-list2">
                      <p><strong></strong>{resume.company}</p>
                      <p><strong></strong>{resume.location}</p>
                      <p><strong></strong>{resume.jobtitle}</p>
                      <p><strong></strong>{resume.duration}</p>
                      <p><strong></strong>{resume.responsibilities1}</p>
                      <p><strong></strong>{resume.responsibilities2}</p>
                      <p><strong></strong>{resume.responsibilities3}</p>
                 </div>
                 ))}
          </div>
      )
  }

}


export default ResumeDetail;
