import './App.css';
import React, {Component} from 'react';
import Customer from "./components/Customer";
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import Paper from "@material-ui/core/Paper" //컴포넌트의 외부를 감싸기 위해 사용하는 것
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
  root :{
    width : '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table : {
    minWidth : 1080
  }
})
const customer = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday' : '261222',
  'gender': '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday' : '951020',
  'gender': '남자',
  'job' : '프로그래머'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name': '이순신',
  'birthday' : '261222',
  'gender': '남자',
  'job' : '디자이너'
}]

class App extends Component {
  render() {
    const {classes} = this.props; //위에서 정의한 스타일이 적용될수 있도록 함
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>              
            </TableRow>
          </TableHead>
          <TableBody>
      {
        customer.map(c=> {
          return (
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job} />
          )
        })
      }
      </TableBody>
      </Table>
      </Paper>
    )
  }
}
export default withStyles(styles)(App);
