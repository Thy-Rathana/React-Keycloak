import React from "react";
import PropTypes from "prop-types";
import Default from "../layouts/Default";
import { useFetch } from "../customHooks/useFetch";
import { Users } from "../components/user/Users";

UsersPage.propTypes = {};

function UsersPage(props: any) {
  const data = useFetch("/users");

  return (
    <>
      <Default auth>
        <div className="container mx-auto">
          <Users data={data} />
        </div>
      </Default>
    </>
  );
}

export default UsersPage;
