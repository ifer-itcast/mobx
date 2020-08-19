import { observable, action, computed } from 'mobx';
class FriendStore {
    @observable friends = ['ifer', 'elser'];
    @action addFriend = friend => {
        this.friends.unshift(friend);
    };
    @computed get getFriends() {
        return this.friends.join(',');
    }
    @computed get getCount() {
        return this.friends.length;
    }
}
const store = new FriendStore();
export default store;