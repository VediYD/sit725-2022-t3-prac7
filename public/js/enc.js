import crypto, { createDecipheriv } from "crypto";

const sec =
  "b08e668efd5985b3fd07a5e37c4a30894e894e1a34da90f6c566e3173821e3b2:2ccdedb312d54341ed89142c014ed9c8d37f38bbb7f7c5c0bb5eab4317ac265047cbc228f72e6d877eadd2df2489259e1bb47964c05a9533c45cc89d29eeb10e67240ef2c296ad72cf19be74b616c9a55f014dd5db352f18b590edb0387357cb:d352fa1929978e755ce8713f58b76269";

function dec(_s) {
  var _sec = _s.split(":");
  var _dcipher = createDecipheriv(
    "aes-256-cbc",
    Buffer.from(_sec[0], "hex"),
    Buffer.from(_sec[2], "hex")
  );
  return _dcipher.update(_sec[1], "hex", "utf8") + _dcipher.final("utf8");
}

export default { sec, dec };
