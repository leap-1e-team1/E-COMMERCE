"use client";
import React, { useState } from "react";

// 4 inout shalgaad backendee duudan otp zuv esehiig shalgan tgd zuv baival continueHandler duudna

export default function OTPField({
  continueHandler,
}: {
  continueHandler: () => void;
}) {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [hoveredIndex, setHoveredIndex] = useState(-1); // Track which input is hovered

  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value;
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next field automatically when a number is entered
      if (value && index < otp.length - 1) {
        const nextField = document.getElementById(
          `otp-${index + 1}`
        ) as HTMLInputElement;
        nextField?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (!otp[index] && index > 0) {
        // Move to the previous field when backspace is pressed
        const prevField = document.getElementById(
          `otp-${index - 1}`
        ) as HTMLInputElement;
        prevField?.focus();
        newOtp[index - 1] = ""; // Clear the previous field
      } else {
        newOtp[index] = ""; // Clear the current field
      }
      setOtp(newOtp);
    }
  };

  return (
    <div
      style={{
        display: "inline-flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {otp.map((data, index) => (
        <div
          key={index}
          style={{
            width: 56,
            background: "white",
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              height: 56,
              padding: 8,
              background: "white",
              border: `1px solid ${
                hoveredIndex === index ? "#121316" : "#D6D8DB"
              }`, // Change border color
              borderWidth: hoveredIndex === index ? "2px" : "1px", // Set border width based on hover
              borderRadius:
                index === 0
                  ? "8px 0 0 8px"
                  : index === otp.length - 1
                  ? "0 8px 8px 0"
                  : "0",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "border-color 0.3s, border-width 0.3s", // Smooth transition for border color and width
            }}
            onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on mouse enter
            onMouseLeave={() => setHoveredIndex(-1)} // Reset hovered index on mouse leave
          >
            <input
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={otp[index]}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)} // Handle backspace key
              onFocus={() => setHoveredIndex(index)} // Keep hovered index on focus
              onBlur={() => setHoveredIndex(-1)} // Reset hovered index on blur
              style={{
                width: 40,
                height: 40,
                textAlign: "center",
                fontSize: "18px",
                fontFamily: "Inter",
                fontWeight: 400,
                lineHeight: "28px",
                border: "none",
                outline: "none",
                position: "relative",
                zIndex: 1, // Ensure input is above the div
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
