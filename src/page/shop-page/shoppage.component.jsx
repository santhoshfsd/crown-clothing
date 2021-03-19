import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../component/collections-overview/collection-overview.component";
import CollectionPage from "./../collection/collection.component";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "./../../firebase/firebase.utils.js";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.action";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  componentWillUnmount() {}
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
