import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../component/collections-overview/collection-overview.component";
import CollectionPage from "./../collection/collection.component";

import WithSpinner from "../../component/with-spinner/with-spinner.component";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "./../../firebase/firebase.utils.js";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.action";
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  // constructor alias
  state = {
    loading: true,
  };

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {}
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
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
