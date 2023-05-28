function CreditInfo({ creditInfo }) {
  if (creditInfo === "") {
    return (
      <div>
        <div>약력</div>
        <div>입력된 약력이 존재하지 않습니다</div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="biography_title">약력</div>
        <div>
          <div className="credit_biography">{creditInfo}</div>
        </div>
      </div>
    );
  }
}

export default CreditInfo;
