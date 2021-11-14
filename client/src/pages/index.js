import * as React from "react";
import Page from "../components/Page";
import GridColumn from "../components/gridcolumn";
import Layout from "./layout";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Page columns={8} columnGap={"1em"} rows={6}>
        <GridColumn column={1} columnSpan={2} row={2} rowSpan={1}>
          <div>Yo</div>
        </GridColumn>
      </Page>
    </Layout>
  );
};

export default IndexPage;
