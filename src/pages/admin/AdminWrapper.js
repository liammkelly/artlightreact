import styled from "styled-components"

const AdminWrapper = styled.div `
a,a:visited {
    color: #000;
  }
  .rdt {
    position: relative;
  }
  .rdtPicker {
    display: none;
    position: absolute;
    width: 250px;
    padding: 4px;
    margin-top: 1px;
    z-index: 99999 !important;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,.1);
    border: 1px solid #f9f9f9;
  }
  .rdtOpen .rdtPicker {
    display: block;
  }
  .rdtStatic .rdtPicker {
    box-shadow: none;
    position: static;
  }
  
  .rdtPicker .rdtTimeToggle {
    text-align: center;
  }
  
  .rdtPicker table {
    width: 100%;
    margin: 0;
  }
  .rdtPicker td,
  .rdtPicker th {
    text-align: center;
    height: 28px;
  }
  .rdtPicker td {
    cursor: pointer;
  }
  .rdtPicker td.rdtDay:hover,
  .rdtPicker td.rdtHour:hover,
  .rdtPicker td.rdtMinute:hover,
  .rdtPicker td.rdtSecond:hover,
  .rdtPicker .rdtTimeToggle:hover {
    background: #eeeeee;
    cursor: pointer;
  }
  .rdtPicker td.rdtOld,
  .rdtPicker td.rdtNew {
    color: #999999;
  }
  .rdtPicker td.rdtToday {
    position: relative;
  }
  .rdtPicker td.rdtToday:before {
    content: '';
    display: inline-block;
    border-left: 7px solid transparent;
    border-bottom: 7px solid #428bca;
    border-top-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 4px;
    right: 4px;
  }
  .rdtPicker td.rdtActive,
  .rdtPicker td.rdtActive:hover {
    background-color: #428bca;
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  }
  .rdtPicker td.rdtActive.rdtToday:before {
    border-bottom-color: #fff;
  }
  .rdtPicker td.rdtDisabled,
  .rdtPicker td.rdtDisabled:hover {
    background: none;
    color: #999999;
    cursor: not-allowed;
  }
  
  .rdtPicker td span.rdtOld {
    color: #999999;
  }
  .rdtPicker td span.rdtDisabled,
  .rdtPicker td span.rdtDisabled:hover {
    background: none;
    color: #999999;
    cursor: not-allowed;
  }
  .rdtPicker th {
    border-bottom: 1px solid #f9f9f9;
  }
  .rdtPicker .dow {
    width: 14.2857%;
    border-bottom: none;
    cursor: default;
  }
  .rdtPicker th.rdtSwitch {
    width: 100px;
  }
  .rdtPicker th.rdtNext,
  .rdtPicker th.rdtPrev {
    font-size: 21px;
    vertical-align: top;
  }
  
  .rdtPrev span,
  .rdtNext span {
    display: block;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    -khtml-user-select: none;    /* Konqueror */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* Internet Explorer/Edge */
    user-select: none;
  }
  
  .rdtPicker th.rdtDisabled,
  .rdtPicker th.rdtDisabled:hover {
    background: none;
    color: #999999;
    cursor: not-allowed;
  }
  .rdtPicker thead tr:first-child th {
    cursor: pointer;
  }
  .rdtPicker thead tr:first-child th:hover {
    background: #eeeeee;
  }
  
  .rdtPicker tfoot {
    border-top: 1px solid #f9f9f9;
  }
  
  .rdtPicker button {
    border: none;
    background: none;
    cursor: pointer;
  }
  .rdtPicker button:hover {
    background-color: #eee;
  }
  
  .rdtPicker thead button {
    width: 100%;
    height: 100%;
  }
  
  td.rdtMonth,
  td.rdtYear {
    height: 50px;
    width: 25%;
    cursor: pointer;
  }
  td.rdtMonth:hover,
  td.rdtYear:hover {
    background: #eee;
  }
  
  .rdtCounters {
    display: inline-block;
  }
  
  .rdtCounters > div {
    float: left;
  }
  
  .rdtCounter {
    height: 100px;
  }
  
  .rdtCounter {
    width: 40px;
  }
  
  .rdtCounterSeparator {
    line-height: 100px;
  }
  
  .rdtCounter .rdtBtn {
    height: 40%;
    line-height: 40px;
    cursor: pointer;
    display: block;
  
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    -khtml-user-select: none;    /* Konqueror */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* Internet Explorer/Edge */
    user-select: none;
  }
  .rdtCounter .rdtBtn:hover {
    background: #eee;
  }
  .rdtCounter .rdtCount {
    height: 20%;
    font-size: 1.2em;
  }
  
  .rdtMilli {
    vertical-align: middle;
    padding-left: 8px;
    width: 48px;
  }
  
  .rdtMilli input {
    width: 100%;
    font-size: 1.2em;
    margin-top: 37px;
  }
  
  .rdtTime td {
    cursor: default;
  }
  
  .nav ul {
    list-style: none;
    background-color: #444;
    text-align: center;
    padding: 0;
    margin: 0;
  }
  .nav li {
    font-family: 'Oswald', sans-serif;
    font-size: 1.2em;
    line-height: 40px;
    height: 40px;
    border-bottom: 1px solid #888;
  }
   
  .nav a {
    text-decoration: none;
    color: #fff;
    display: block;
    transition: .3s background-color;
  }
   
  .nav a:hover {
    background-color: #005f5f;
  }
   
  .nav a.active {
    background-color: #fff;
    color: #444;
    cursor: default;
  }
  
  .admin-form{
      font: 95% Arial, Helvetica, sans-serif;
      max-width: 400px;
      margin: 10px auto;
      padding: 16px;
      background: #F7F7F7;
  }
  .admin-form h1{
      background: #43D1AF;
      padding: 20px 0;
      font-size: 140%;
      font-weight: 300;
      text-align: center;
      color: #fff;
      margin: -16px -16px 16px -16px;
  }
  .admin-form input[type="text"],
  .admin-form input[type="date"],
  .admin-form input[type="datetime"],
  .admin-form input[type="email"],
  .admin-form input[type="number"],
  .admin-form input[type="search"],
  .admin-form input[type="time"],
  .admin-form input[type="url"],
  .admin-form textarea,
  .admin-form select 
  {
      -webkit-transition: all 0.30s ease-in-out;
      -moz-transition: all 0.30s ease-in-out;
      -ms-transition: all 0.30s ease-in-out;
      -o-transition: all 0.30s ease-in-out;
      outline: none;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      width: 100%;
      background: #fff;
      margin-bottom: 4%;
      border: 1px solid #ccc;
      padding: 3%;
      color: #555;
      font: 95% Arial, Helvetica, sans-serif;
  }
  .admin-form input[type="text"]:focus,
  .admin-form input[type="date"]:focus,
  .admin-form input[type="datetime"]:focus,
  .admin-form input[type="email"]:focus,
  .admin-form input[type="number"]:focus,
  .admin-form input[type="search"]:focus,
  .admin-form input[type="time"]:focus,
  .admin-form input[type="url"]:focus,
  .admin-form textarea:focus,
  .admin-form select:focus
  {
      box-shadow: 0 0 5px #43D1AF;
      padding: 3%;
      border: 1px solid #43D1AF;
  }
  
  .admin-form button,
  .admin-form input[type="submit"],
  .admin-form input[type="button"]{
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      width: 100%;
      padding: 3%;
      background: #43D1AF;
      border-bottom: 2px solid #30C29E;
      border-top-style: none;
      border-right-style: none;
      border-left-style: none;	
      color: #fff;
  }
  .admin-form input[type="submit"]:hover,
  .admin-form input[type="button"]:hover{
      background: #2EBC99;
  }
   
  @media screen and (min-width: 600px) {
    .nav li {
      width: 200px;
      border-bottom: none;
      height: 50px;
      line-height: 50px;
      font-size: 1.4em;
    }
   
    /* Option 1 - Display Inline */
    .nav li {
      display: inline-block;
      margin-right: -4px;
    }
   
    /* Options 2 - Float
    .nav li {
      float: left;
    }
    .nav ul {
      overflow: auto;
      width: 600px;
      margin: 0 auto;
    }
    .nav {
      background-color: #444;
    }
    */
  }
`

export default AdminWrapper