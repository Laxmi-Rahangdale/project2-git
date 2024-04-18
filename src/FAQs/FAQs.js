import './FAQs.css';

const FAQs=()=>{
    return(
        <div className='container plus' >

            <div className="row" style={{ textAlign: '-webkit-center' }}>
                <div className="col ">

                    <div className="p-4">
                        <h1 className="mb-3" style={{ color: "#FFFFFF" }}>Frequently asked questions</h1>
                    </div>

                    <div className="m-4">
                        <div className="card " style={{ width: '50%', background: 'border-box ', border: 'none' }}>
                            <div className="card-body  " style={{ borderBottom: "1px solid #FFFFFF", padding: '30px 0 15px 0', border: '0px 0px 1px 0px' }}>
                                <div className="display-ruby" style={{ textAlign: '-webkit-right' }}>
                                    <h6 className="card-title" style={{ textAlign: "left", color: '#FFFFFF' }}> How does the pricing work for teams <img style={{ float: 'right', paddingRight: '-1%' }} alt="" src="/Framecopy.png" /></h6>
                                </div>

                            </div>
                        </div>

                        <div className="card  card2" style={{ width: '50%', background: 'border-box ', border: 'none' }}>
                            <div className="card-body " style={{ borderBottom: "1px solid #FFFFFF ", padding: '30px 0 15px 0', border: '0px 0px 1px 0px' }}>
                                <h6 className="card-title " style={{ textAlign: "left", color: '#FFFFFF' }}> How does the pricing work for teams    <img style={{ float: 'right', paddingRight: '-1%' }} alt="" src="/Framecopy.png" /></h6>
                            </div>
                        </div>

                        <div class="card " style={{ width: '50%', background: 'border-box ', border: 'none' }}>
                            <div class="card-body " style={{ borderBottom: "1px solid #FFFFFF", padding: '30px 0 15px 0', border: '0px 0px 1px 0px' }}>
                                <h6 class="card-title " style={{ textAlign: "left", color: '#FFFFFF' }}> How does the pricing work for teams   <img style={{ float: 'right', paddingRight: '-1%' }} alt="" src="/Framecopy.png" /></h6>
                            </div>
                        </div>

                        <div class="card " style={{ width: '50%', background: 'border-box ', border: 'none' }}>
                            <div class="card-body " style={{ borderBottom: "1px solid #FFFFFF", padding: '30px 0 15px 0', border: '0px 0px 1px 0px' }}>
                                <h6 class="card-title " style={{ textAlign: "left", color: '#FFFFFF' }}> How does the pricing work for teams   <img style={{ float: 'right', paddingRight: '-1%' }} alt="" src="/Framecopy.png" /></h6>
                            </div>
                        </div>



                    </div>

                </div>

            </div>

        </div>

    )
}

export default FAQs;