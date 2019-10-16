<!DOCTYPE html>
<html lang="en">
<head>
  <title>SIH 2018:Application Detals</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta charset="utf-8">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.0.1/min/dropzone.min.css" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.2.0/min/dropzone.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
  <link rel="stylesheet" href="/static/css/navbar.css">
  <link rel="stylesheet" href="/static/css/general.css">
  <link rel="stylesheet" href="/static/css/footer.css">
  <script src="/static/js/navbar.js"></script>
  <link rel="stylesheet" href="/static/css/applicationdetails.css">
  <script src='http://100dayscss.com/codepen/js/jquery.min.js'></script>
  <script src="/static/js/index.js"></script>

</head>

<body>

  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
        <a class="navbar-brand" href="#">SIH2018</a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li><a href="index">Home</a></li>
          <li class="active"><a href="#">Application Details</a></li>
          <li><a href="Status">Status</a></li>
          <li><a href="JobOpenings">Job Openings</a></li>
          <li><a href="meetourteam">About US</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li> <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user"></span> {{ uname }} <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="applicantdetails">Profile</a></li>
              <li><a href="logout">Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container">
    <div class="row">
      <h1>Fill out the Application Details</h1>
      <div class="col-lg-5 col-md-5 col-sm-8 col-xs-9 bhoechie-tab-container">
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 bhoechie-tab-menu">
          <div class="list-group" style="margin-top:0 px">
            <a href="#" class="list-group-item active text-center">
                  APPLICATION DETAILS
                </a>
            <a href="#" class="list-group-item text-center">
                      UPLOAD AADHAAR CARD
                </a>
            <a href="#" class="list-group-item text-center">
                      UPLOAD PAN CARD
            </a>
            <a href="#" class="list-group-item text-center">
                      UPLOAD SSC MARKSHEET
            </a>
            <a href="#" class="list-group-item text-center">
                      UPLOAD HSC MARKSHEET
            </a>
          </div>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 bhoechie-tab">
          <div class="bhoechie-tab-content active">

            <h2 style="text-align: center;">Application Details</h2>
            <hr/>
            <br/>
            <left>{% if data %}


              <form class="form-inline" role="form" method="POST" enctype="multipart/form-data" action="savedata">
                {% csrf_token %}<div class="form-group">
                  <label>First Name: &ensp;&ensp;&ensp;&ensp;</label><input value="{{ data.first_name }}" type="text" class="form-control" name="FirstName" placeholder="First Name" required>
                </div>
                <br/><br/>
                <div class="form-group">
                  <label>Middle Name: &ensp;&ensp; </label><input type="text" value="{{ data.middle_name }}" class="form-control" name="MiddleName" placeholder="Middle Name" required>
                </div>
                <br/><br/>

                <div class="form-group">
                  <label>Last Name: &ensp;&ensp;&ensp;&ensp; </label><input type="text" value="{{ data.last_name }}" class="form-control" name="LastName" placeholder="Last Name" required>
                </div><br/><br/>

                <div class="form--group">
                  <label>Permanent<br/> Address: &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;  </label><textarea class="form-control"  name="Address"  placeholder="Address" required>{{ data.address }}</textarea>
                </div><br/>

                <div class="form-group">
                  <label>Country: &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; </label><input type="text" class="form-control"  value="{{ data.country }}" name="Country" placeholder="Country" required>
                </div><br/><br/>

                <div class="form-group">
                  <label>State: &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; </label><input type="text" class="form-control"  value="{{ data.state }}" name="State" placeholder="State" required>
                </div><br/><br/>

                <div class="radio">
                  <b>Gender : &ensp;&ensp;&ensp;&ensp;&ensp;</b>
                  <label><input type="radio" name="Gender" value="Male"{% ifequal data.gender "Male"%} checked="checked" {% endifequal %} required> Male&nbsp;&nbsp;</label>
                  <label><input type="radio" name="Gender" value="Female"{% ifequal data.gender "Female"%} checked="checked" {% endifequal %} required> Female&nbsp;&nbsp;</label>
                  <label><input type="radio" name="Gender" value="Others" {% ifequal data.gender "Others"%} checked="checked" {% endifequal %} required> Others</label>
                </div>
                <br/>
                <hr/>
                <button type="submit" class="btn btn-default" name="SubmitDetails" style="background-color: #073F54;color:#fff;margin-left: 200px; width: 150px">Submit</button>{% if saved %}Saved!!{% endif %}
                <br/><br/>
              </form>
                {% else %}
              <form class="form-inline" role="form" method="POST" enctype="multipart/form-data" action="savedata">
                {% csrf_token %}<div class="form-group">
                  <label>First Name: &ensp;&ensp;&ensp;&ensp;</label><input type="text" class="form-control" name="FirstName" placeholder="First Name" required>
                </div>
                <br/><br/>
                <div class="form-group">
                  <label>Middle Name: &ensp;&ensp; </label><input type="text" class="form-control" name="MiddleName" placeholder="Middle Name" required>
                </div>
                <br/><br/>

                <div class="form-group">
                  <label>Last Name: &ensp;&ensp;&ensp;&ensp; </label><input type="text" class="form-control" name="LastName" placeholder="Last Name" required>
                </div><br/><br/>

                <div class="form--group">
                  <label>Permanent<br/> Address: &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;  </label><textarea class="form-control" name="Address" placeholder="Address" required></textarea>
                </div><br/>

                <div class="form-group">
                  <label>Country: &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; </label><input type="text" class="form-control" name="Country" placeholder="Country" required>
                </div><br/><br/>

                <div class="form-group">
                  <label>State: &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; </label><input type="text" class="form-control" name="State" placeholder="State" required>
                </div><br/><br/>

                <div class="radio">
                  <b>Gender : &ensp;&ensp;&ensp;&ensp;&ensp;</b>
                  <label><input type="radio" name="Gender" value="Male" required> Male&nbsp;&nbsp;</label>
                  <label><input type="radio" name="Gender" value="Female" required> Female&nbsp;&nbsp;</label>
                  <label><input type="radio" name="Gender" value="Others" required> Others</label>
                </div>
                <br/>
                <hr/>
                <button type="submit" class="btn btn-default" name="SubmitDetails" style="background-color: #073F54;color:#fff;margin-left: 200px; width: 150px">Submit</button>
                <br/><br/>
              </form>
                {% endif %}
            </left>
          </div>
          <div class="bhoechie-tab-content">
            <h2 style="text-align: center">Upload Aadhaar Card</h2>
            <hr/>
            <br/>
            <form class="box" method="post" action="uploaddata" enctype="multipart/form-data">
              {% csrf_token %}<div class="frame">
                <div class="center">
                  <div class="bar"></div>
                  <div class="title">Drop file to upload</div>
                  <div class="dropzone">
                    <div class="content">
                      <img src="http://100dayscss.com/codepen/upload.svg" class="upload">
                      <span class="filename"></span>
                      <input type="file" name="aadhaarcard" class="input">
                    </div>
                  </div>
                  <img src="http://100dayscss.com/codepen/syncing.svg" class="syncing">
                  <img src="http://100dayscss.com/codepen/checkmark.svg" class="done">
                  <button class="upload-btn" name="aadhaar" type="submit" >Upload file</button>
<div class="share_fm_dl" id="attachment_poi"></div>
                </div>
              </div>
            </form>
          </div>
          <div class="bhoechie-tab-content">
            <h2 style="text-align: center">Upload Pan Card</h2>
            <hr/>
            <br/>
            <form class="box" method="post" action="" enctype="multipart/form-data">
             {% csrf_token %} <div class="frame">
                <div class="center">
                  <div class="bar"></div>
                  <div class="title">Drop file to upload</div>
                  <div class="dropzone">
                    <div class="content">
                      <img src="http://100dayscss.com/codepen/upload.svg" class="upload">
                      <span class="filename"></span>
                      <input type="file" class="input">
                    </div>
                  </div>
                  <img src="http://100dayscss.com/codepen/syncing.svg" class="syncing">
                  <img src="http://100dayscss.com/codepen/checkmark.svg" class="done">
                  <div class="upload-btn">Upload file</div>
<div class="share_fm_dl" id="attachment_poi"></div>
                </div>
              </div>
            </form>
          </div>
          <div class="bhoechie-tab-content">
            <h2 style="text-align: center">Upload SSC Marksheet</h2>
            <hr/>
            <br/>
            <form class="box" method="post" action="" enctype="multipart/form-data">
             {% csrf_token %} <div class="frame">
                <div class="center">
                  <div class="bar"></div>
                  <div class="title">Drop file to upload</div>
                  <div class="dropzone">
                    <div class="content">
                      <img src="http://100dayscss.com/codepen/upload.svg" class="upload">
                      <span class="filename"></span>
                      <input type="file" class="input">
                    </div>
                  </div>
                  <img src="http://100dayscss.com/codepen/syncing.svg" class="syncing">
                  <img src="http://100dayscss.com/codepen/checkmark.svg" class="done">
                  <div class="upload-btn">Upload file</div>
<div class="share_fm_dl" id="attachment_poi"></div>
                </div>
              </div>
            </form>
          </div>
          <div class="bhoechie-tab-content">
            <h2 style="text-align: center">Upload HSC  Marksheet</h2>
            <hr/>
            <br/>
            <form class="box" method="post" action="" enctype="multipart/form-data">
             {% csrf_token %} <div class="frame">
                <div class="center">
                  <div class="bar"></div>
                  <div class="title">Drop file to upload</div>
                  <div class="dropzone">
                    <div class="content">
                      <img src="http://100dayscss.com/codepen/upload.svg" class="upload">
                      <span class="filename"></span>
                      <input type="file" class="input">
                    </div>
                  </div>
                  <img src="http://100dayscss.com/codepen/syncing.svg" class="syncing">
                  <img src="http://100dayscss.com/codepen/checkmark.svg" class="done">
                  <div class="upload-btn">Upload file</div>
<div class="share_fm_dl" id="attachment_poi"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer class="page-footer font-small unique-color-dark pt-0 fixed-bottom">
    <div class="container mt-5 mb-4 text-md-left">
      <div class="row mt-3">
        <br/>
        <div class="col-md-3 col-lg-4 col-xl-3 mb-4 text-center">
          <h6 class="text-uppercase font-weight-bold">
                      <strong>SIH 2018</strong>
                  </h6>
          <hr class="hrfooter" />
          <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-center">
          <h6 class="text-uppercase font-weight-bold">
                      <strong id="test">Products</strong>
                  </h6>
          <hr class="hrfooter">
          <p>
            <a href="http://www.nielit.gov.in/content/acts-rules" class="ahref">Act and Rules</a>
          </p>
          <p>
            <a href="http://www.nielit.gov.in/content/mou-industry-academic-institutions-universities" class="ahref">MoUs</a>
          </p>
          <p>
            <a href="JobOpenings" class="ahref">Opportunities</a>
          </p>
          <p>
            <a href="http://www.nielit.gov.in/node/2361" class="ahref" class="ahref">Grievance</a>
          </p>
          <p>
            <a href="http://www.nielit.gov.in/content/right-information-1" class="ahref">RTI</a>
          </p>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-center">
          <h6 class="text-uppercase font-weight-bold">
                      <strong>Useful links</strong>
                  </h6>
          <hr class="hrfooter">
          <p>
            <a href="http://meity.gov.in/" class="ahref">meity.gov.in</a>
          </p>
          <p>
            <a href="https://india.gov.in/" class="ahref">india.gov.in</a>
          </p>
          <p>
            <a href="https://www.mygov.in/" class="ahref">mygov.in</a>
          </p>
          <p>
            <a href="https://mail.gov.in/iwc_static/c11n/allDomain/layout/login_gov2.jsp?lang=en-US&3.0.1.2.0_15121607&svcs=abs,mail,smime,calendar,c11n" class="ahref">mail.mygov.in</a>
          </p>
          <p>
            <a href="http://www.nielit.gov.in/content/downloads-37" class="ahref">Downloads</a>
          </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3">
          <h6 class="text-uppercase font-weight-bold text-center">
                      <strong>Contact</strong>
                  </h6>
          <hr class="hrfooter" />
          <p>
            <i class="fa fa-home mr-3"></i> &nbsp;&nbsp;NIELIT Bhawan, Plot No. 3, PSP Pocket, Sector-8, Dwarka, New Delhi-110077
          </p>
          <p>
            <i class="fa fa-envelope mr-3"></i> &nbsp;&nbsp;contact@nielit.gov.in
          </p>
          <p>
            <i class="fa fa-phone mr-3"></i> &nbsp;&nbsp;+91-11-2436 3330
          </p>
          <p>
            <i class="fa fa-print mr-3"></i> &nbsp;&nbsp;1800116511</p>
        </div>
      </div>
    </div>
    <hr class="hrfooter" />
    <div class="footer-copyright py-3 text-center">
      <i style="color:grey;">© 2018 Copyright:</i> <a>SIH2018
      </a>
    </div>
    <br/>
  </footer>

 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

                                        <script type="text/javascript"
                                                src='https://devservices.digitallocker.gov.in/requester/api/2/dl.js'
                                                id="dlshare"
                                                data-app-id='SRS'
                                                data-app-hash='{{ hash }}'
                                                time-stamp='{{ timestamp }}'
                                                data-callback='myCallback'>
                                        </script>
                                       <script>
                                        function myCallback(arg) {
                                                    var arg=JSON.parse(arg)

                                                     $.ajax({
                                                            type : "POST",
                                                            url : "uploaddoc",
                                                            data : arg,
                                                            async: false,
                                                            success : function(data) {
                                                                returnmsg = "SUCCESS";
                                                            },
                                                            error : function(data) {
                                                            alert("Some error occured.");
                                                            returnmsg = "FAILURE";
                                                        }
                                                    });
                                                    //alert(returnmsg);
                                                    return returnmsg;
                                                    }
                                            </script>
</body>

</html>
