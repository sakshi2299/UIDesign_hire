import React from 'react';
import Group67 from '../assets/Group67.png'
const BoxComponent = () => {
  const mainBoxStyle = {
    width: "929px",
    height: "991px",
    top: "1447px",
    marginTop: "30px",
    border: "1px solid grey",
    backgroundColor:"rgba(0, 0, 0, 0.2)",
    borderColor:"",
    borderRadius: "5px"
  };

  const subBoxStyle = {
    width: "870px",
    height: "695px",
    top: "1477px",
    left: "19.9990234375px",
    padding: "10px"
  };

  const titleStyle = {
    fontFamily: "Inter",
    fontSize: "24px",
    fontWeight: "400",
    lineHeight: "29px",
    letterSpacing: "-1px",
    textAlign: "left",
    color: "#0A0A0A"
  };
  const imgStyle={
    width: "850px", height: "176px", top: "49px", borderRadius: "5px"

  }
  const milestoneContainerStyle = {
    width: "400px",
    height: "129px",
    top: "245px",
    left: "0px"
  };

  const milestoneLabelStyle = {
    fontFamily: "Inter",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "22px",
    letterSpacing: "-0.5px",
    textAlign: "left",
    color: "#0A0A0A"
  };

  const milestoneInputStyle = {
    width: "400px",
    height: "40px",
    marginTop: "-30px"
  };

  const milestoneNoteStyle = {
    fontFamily: "Roboto",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "21px",
    letterSpacing: "-0.5px",
    textAlign: "left",
    color: "#FF0C0C",
    marginTop: "0px"
  };

  const startDateContainerStyle = {
    width: "400px",
    height: "96px",
    top: "399px"
  };

  const startDateLabelStyle = {
    fontFamily: "Roboto",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "21px",
    letterSpacing: "-0.5px",
    textAlign: "left"
  };

  const startDateInputStyle = {
    width: "400px",
    height: "50px",
    top: "37px"
  };

  const milestoneDescriptionStyle = {
    width: "365px",
    height: "97px"
  };

  const milestoneNumberStyle = {
    fontFamily: "Roboto",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "21px",
    letterSpacing: "-0.5px",
    textAlign: "left",
    color: "#0A0A0A"
  };

  const milestoneTextInputStyle = {
    width: "300px",
    height: "45px",
    top: "38px"
  };

  const milestoneAmountStyle = {
    width: "203px",
    height: "97px",
    left: "300px",
    padding: "0px"
  };

  const amountLabelStyle = {
    fontFamily: "Roboto",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "21px",
    letterSpacing: "-0.5px",
    textAlign: "left",
    color: "#0A0A0A"
  };

  const amountInputStyle = {
    width: "150px",
    height: "45px",
    top: "38px"
  };

  const milestoneDateStyle = {
    width: "204px",
    height: "96px",
    left: "592px"
  };

  const dateLabelStyle = {
    fontFamily: "Roboto",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "21px",
    letterSpacing: "-0.5px",
    textAlign: "left"
  };

  const dateInputStyle = {
    width: "150px",
    height: "45px",
    top: "37px"
  };

  const milestoneStatusStyle = {
    width: "75px",
    height: "96px",
    left: "808px"
  };

  const statusLabelStyle = {
    fontFamily: "Roboto",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "21px",
    letterSpacing: "-0.5px",
    textAlign: "left"
  };

  const statusContainerStyle = {
    width: "55px",
    height: "45px",
    top: "37px",
    backgroundColor: "lightpink"
  };

  const statusTextStyle = {
    fontFamily: "Roboto",
    fontSize: "13px",
    fontWeight: "500",
    lineHeight: "15px",
    letterSpacing: "0px",
    textAlign: "center",
    paddingTop: "14px",
    color: "#FF0C0C"
  };
  const addMilestoneButtonStyle = {
    width: "20%",
    height: "50px",
    borderRadius: "30px",
    backgroundColor: "#0A0A0A",
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    marginTop: "20px"
  };

  const renderMilestoneRows = () => {
    const rowCount = 3;

    const milestones = [
      { description: "Milestone 1", amount: "100", date: "2023-07-01", status: "Completed" },
      { description: "Milestone 2", amount: "200", date: "2023-07-05", status: "Completed" },
      { description: "Milestone 3", amount: "300", date: "2023-07-10", status: "Pending" }
    ];

    return milestones.map((milestone, index) => (
      <div key={index} style={{ display: "flex" }}>
        <div style={milestoneDescriptionStyle}>
          <p style={milestoneNumberStyle}>
            Milestone Description<span style={{ color: "#FF0C0C" }}>*</span>
          </p>
          <div style={{ display: "flex" }}>
            <p>{index + 1}</p>
            <input type="text" style={milestoneTextInputStyle} value={milestone.description} />
          </div>
        </div>
        <div style={milestoneAmountStyle}>
          <p style={amountLabelStyle}>
            Amount<span style={{ color: "#FF0C0C" }}>*</span>
          </p>
          <input type="text" style={amountInputStyle} value={milestone.amount} />
        </div>
        <div style={milestoneDateStyle}>
          <p style={dateLabelStyle}>Date<span style={{ color: "#FF0C0C" }}>*</span></p>
          <input type="date" style={dateInputStyle} value={milestone.date} />
        </div>
        <div style={milestoneStatusStyle}>
          <p style={statusLabelStyle}>
            Status<span style={{ color: "#FF0C0C" }}>*</span>
          </p>
          <div style={{ ...statusContainerStyle, backgroundColor: milestone.status === 'Completed' ? 'lightgreen' : 'lightpink' }}>
            <p style={{ ...statusTextStyle, color: milestone.status === 'Completed' ? 'green' : '#FF0C0C' }}>{milestone.status}</p>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <div style={mainBoxStyle}>
      <div style={subBoxStyle}>
        <p style={titleStyle}>Contract Terms</p>
        <img src={Group67} style={imgStyle} alt="Pay by the milestone"/>
        <div style={milestoneContainerStyle}>
          <p style={milestoneLabelStyle}>
            Select Number Of <br />Milestone<span style={{ color: "#FF0C0C" }}>*</span>
          </p>
          <input type="number" style={milestoneInputStyle} />
          <p style={milestoneNoteStyle}>*You can’t create more than 30 Milestone.</p>
        </div>
        <div style={startDateContainerStyle}>
          <p style={startDateLabelStyle}>Start Date(Optional)</p>
          <input type="date" style={startDateInputStyle} />
        </div>
        <div style={{ width: "800px", height: "172px", top: "523px" }}>
          {renderMilestoneRows()}
          <div style={addMilestoneButtonStyle}>+ Add Milestone</div>
        </div>
      </div>
    </div>
  );
};

export default BoxComponent;
