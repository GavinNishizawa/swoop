
let mystr = "testing";

[@react.component]
let default = () =>
    <div>
        {mystr -> ReasonReact.string}
    </div>;