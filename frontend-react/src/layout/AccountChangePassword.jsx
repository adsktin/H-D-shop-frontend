import React, { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Button,
  Alert,
} from "@material-tailwind/react";

function PasswordChangeDialog({ open, onClose }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // State for error message

  const handlePasswordChange = () => {
    // Basic Validation (you'll need more robust validation in a real app)
    if (newPassword !== confirmPassword) {
      setError("Mật khẩu mới không khớp.");
      return;
    }

    // TODO: Send password change request to your backend here

    onClose(); // Close the dialog after submission (or after handling errors)
  };

  return (
    <Dialog open={open} handler={onClose}>
      <DialogHeader>Đổi mật khẩu</DialogHeader>
      <DialogBody>
        {error && <Alert color="red">{error}</Alert>} {/* Display error message */}

        <div className="mb-4">
          <Input
            label="Mật khẩu hiện tại"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            type="password"
          />
        </div>
        <div className="mb-4">
          <Input
            label="Mật khẩu mới"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
          />
        </div>
        <div className="mb-4">
          <Input
            label="Xác nhận mật khẩu mới"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
          />
        </div>
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="blue-gray" onClick={onClose}>
          Hủy
        </Button>
        <Button variant="gradient" color="green" onClick={handlePasswordChange}>
          Xác nhận
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default PasswordChangeDialog;
