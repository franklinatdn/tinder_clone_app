import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { CardDetailModal } from '../components/CardDetailModal';
import CardsStack from '../components/CardsStack';
import {
  touchedUsersSelector,
  userDetaisSelector,
} from '../store/usersReducer';
import { useCardDetailModal } from '../utils/hook';

const History = () => {
  const { touchedUsers } = useSelector(touchedUsersSelector);
  const userDetails = useSelector(userDetaisSelector);
  const { isModalShow, onShowModal, onHideModal } = useCardDetailModal();

  const [index, setIndex] = useState(0);

  const currentUser = touchedUsers.peekNext(index);
  const nextUser = touchedUsers.peekNext(index + 1);
  const currentProfile = currentUser
    ? { ...currentUser, ...userDetails[currentUser.id] }
    : null;

  const onSwipe = () => {
    setIndex(index + 1);
  };

  return (
    <View style={styles.containerStyle}>
      <CardsStack
        currentProfile={currentProfile}
        nextProfile={nextUser}
        onViewDetailPress={onShowModal}
        onSwipe={onSwipe}
      />
      <CardDetailModal
        isVisble={isModalShow}
        data={currentProfile}
        onClose={onHideModal}
      />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  containerStyle: { flex: 1, padding: 20 },
});
