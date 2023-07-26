import React from "react";
import PropTypes from "prop-types";
import Default from "../layouts/Default";
import { useFetch } from "../customHooks/useFetch";
import { Todos } from "../components/todo/Todos";

TodosPage.propTypes = {};

function TodosPage(props: any) {
  const data = useFetch("/todos");

  return (
    <>
      <Default auth>
        <div className="container mx-auto">
          <Todos data={data} />
        </div>
      </Default>
    </>
  );
}

export default TodosPage;
