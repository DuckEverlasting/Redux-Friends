import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components';
import FriendCard from './FriendCard';

const FriendListSC = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 20px auto 0;
  max-width: 1200px;
`;


class FriendList extends React.Component {
  componentDidMount(){
    this.props.getFriends();  
  }

  render() {
    return (
      <FriendListSC>
        {this.props.friends.map(el => (
          <FriendCard
            key={el.id}
            friend={el}
            editButton={this.props.edit}
            deleteButton={this.props.delete}
          />
        ))}
      </FriendListSC>
    );
  }
}
const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps, { getFriends })(FriendList);