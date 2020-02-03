import React from 'react';

import { connect } from 'react-redux';
import { fetchPosts } from './store/ducks/Posts/actions';

import Header from './components/Header';
import Headline from './components/Headline';
import SharedButton from './components/Button';
import ListItem from './components/ListItem';
import './App.scss'

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 28,
  onlineStatus: true
}]

function App(props) {

  const configButton = {
    buttonText: 'Get posts',
    emitEvent: fetch
  }

  const { posts } = props;

  function fetch() {
    props.fetchPosts()
  }

  return (
    <div data-test='appComponent' className="App">
      <Header />
      <section className='main'>
        <Headline header='Posts' desc='Click the button to render posts!' tempArr={tempArr} />
        <SharedButton {...configButton} />
        {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return (
                  <ListItem key={index} {...configListItem} />
                )
              })}
            </div>
          }
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}



export default connect(mapStateToProps, {fetchPosts})(App);
