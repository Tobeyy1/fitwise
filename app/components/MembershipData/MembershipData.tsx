import React from "react";
import classes from "./MembershipData.module.scss";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
type Props = { onClose: () => void };

const MembershipData: React.FC<Props> = ({ onClose }) => {
  return (
    <div className={classes.container}>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100%", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className={classes.content__container}
      >
        <div className={classes.top__bar}>
          Membership Data{" "}
          <button type="button" onClick={onClose}>
            <IoMdClose />{" "}
          </button>{" "}
        </div>
        <div className={classes.data__container}>
          <div className={classes.active__members}>
            <span>1000</span>
            <p>Active Members this Month</p>
          </div>{" "}
          <div className={classes.memberships__bought}>
            <span>900</span>
            <p>Memberships Bought</p>
          </div>{" "}
          <div className={classes.subs__to__training}>
            <span>50</span>
            <p>Subscriptions to Training Regimen</p>
          </div>{" "}
          <div className={classes.subs__to__diet__plan}>
            <span>50</span>
            <p>Subscripions to Diet Plan</p>
          </div>
        </div>
      </motion.div>{" "}
    </div>
  );
};

export default MembershipData;
