"use client";

import React, { FormEvent, useState } from "react";
import classes from "./subscription.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { GiInfinity } from "react-icons/gi";
import { useRouter } from "next/navigation";

const Subscription = () => {
  const [selectedMembership, setSelectedMembership] = useState<string>("");

  const router = useRouter();

  const onceAWeekMembership = (
    <label
      htmlFor="once-a-week"
      onClick={() => setSelectedMembership("once-a-week")}
    >
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
      >
        1
      </motion.span>
      <input
        type="radio"
        id="once-a-week"
        name="membership"
        value="once-a-week"
      />
      <h3>Once-a-Week Membership</h3>
      <ul>
        <li> - Access to the gym for one day a week.</li>
        <li> - Use of all gym facilities and classes on the chosen day.</li>
        <li>
          - Designed for casual gym-goers or those who prefer a weekly workout.
        </li>
      </ul>

      <motion.span
        initial={{
          y: 50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "tween",
        }}
        className={classes.amount}
      >
        ₦1000
      </motion.span>
    </label>
  );

  const fourTimesAWeekMembership = (
    <label
      htmlFor="four-times-a-week"
      onClick={() => setSelectedMembership("four-times-a-week")}
    >
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
      >
        4
      </motion.span>
      <input
        type="radio"
        id="four-times-a-week"
        name="membership"
        value="four-times-a-week"
      />
      <h3>Four-Times-a-Week Membership</h3>
      <ul>
        <li> - Access to the gym for four days a week.</li>
        <li> - Use of all gym facilities and classes on the chosen days.</li>
        <li>
          - Suitable for members who have a specific workout routine or prefer a
          part-time commitment.
        </li>
      </ul>

      <motion.span
        initial={{
          y: 50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "tween",
        }}
        className={classes.amount}
      >
        ₦10,000
      </motion.span>
    </label>
  );

  const weekendWarriorMembership = (
    <label
      htmlFor="weekend-warrior"
      onClick={() => setSelectedMembership("weekend-warrior")}
    >
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
      >
        2
      </motion.span>
      <input
        type="radio"
        id="weekend-warrior"
        name="membership"
        value="weekend-warrior"
      />
      <h3>Weekend-Warrior Membership</h3>
      <ul>
        <li> - Access to the gym weekends (Saturday and Sunday).</li>
        <li> - Use of all gym facilities and classes on weekends.</li>
        <li>- Perfect for those with busy weekday schedules.</li>
      </ul>

      <motion.span
        initial={{
          y: 50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "tween",
        }}
        className={classes.amount}
      >
        ₦7,500
      </motion.span>
    </label>
  );

  const unlimitedMembership = (
    <label
      htmlFor="unlimited"
      onClick={() => setSelectedMembership("unlimited")}
    >
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
      >
        <GiInfinity />
      </motion.span>
      <input type="radio" id="unlimited" name="membership" value="unlimited" />
      <h3>Unlimited Membership</h3>
      <ul>
        <li> - Access to the gym everyday of the week.</li>
        <li> - Use of all gym facilities and classes.</li>
        <li>
          - Ideal for individuals who want to workout daily or have a flexible
          schedule.
        </li>
      </ul>

      <motion.span
        initial={{
          y: 50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "tween",
        }}
        className={classes.amount}
      >
        ₦20,000
      </motion.span>
    </label>
  );

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/user-auth/subscription/addons");
  };
  const skipHandler = () => {
    router.push("/user-auth/subscription/addons");
  };

  return (
    <div className={classes.container}>
      <h2>Select a Gym Membership</h2>
      <motion.form
        onSubmit={submitHandler}
        id="membershipForm"
        initial={{ paddingLeft: "50vw", opacity: 0 }}
        animate={{ paddingLeft: "0px", opacity: 1 }}
        // transition={{ duration: 3 }}
        className={classes.membership__container}
      >
        {onceAWeekMembership}
        {weekendWarriorMembership}
        {fourTimesAWeekMembership}
        {unlimitedMembership}
      </motion.form>
      <div className={classes.cta__container}>
        {" "}
        <button
          type="button"
          className={classes.skip__button}
          onClick={skipHandler}
        >
          Skip
        </button>
        <button
          type="submit"
          className={classes.confirm__button}
          form="membershipForm"
        >
          {" "}
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Subscription;
