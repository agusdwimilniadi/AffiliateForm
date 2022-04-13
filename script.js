function name() {
  let testHtml =
    "" +
    "<div" +
    '      style="border-radius: 5px; background-color: transparent; padding: 20px"' +
    "    >" +
    '      <form action="https://jsonplaceholder.typicode.com/posts">' +
    '        <label for="nama">Nama Lengkap <span style="color: red">*</span></label>' +
    "        <input" +
    '          type="text"' +
    '          id="name"' +
    '          name="name"' +
    '          placeholder="Nama Lengkap"' +
    '          style="' +
    "            width: 100%;" +
    "            padding: 12px 20px;" +
    "            margin: 8px 0;" +
    "            display: inline-block;" +
    "            border: 1px solid #ccc;" +
    "            border-radius: 4px;" +
    "            box-sizing: border-box;" +
    '          "' +
    "        />" +
    '        <label for="perusahaan"' +
    '          >Perusahaan <span style="color: red">*</span></label' +
    "        >" +
    "        <input" +
    '          type="text"' +
    '          id="perusahaan"' +
    '          name="perusahaan"' +
    '          placeholder="Perusahaan"' +
    '          style="' +
    "            width: 100%;" +
    "            padding: 12px 20px;" +
    "            margin: 8px 0;" +
    "            display: inline-block;" +
    "            border: 1px solid #ccc;" +
    "            border-radius: 4px;" +
    "            box-sizing: border-box;" +
    '          "' +
    "        />" +
    '        <label for="email">Email <span style="color: red">*</span></label>' +
    "        <input" +
    '          type="email"' +
    '          id="email"' +
    '          name="email"' +
    '          placeholder="Email"' +
    '          style="' +
    "            width: 100%;" +
    "            padding: 12px 20px;" +
    "            margin: 8px 0;" +
    "            display: inline-block;" +
    "            border: 1px solid #ccc;" +
    "            border-radius: 4px;" +
    "            box-sizing: border-box;" +
    '          "' +
    "        />" +
    '        <label for="noTelp"' +
    '          >Nomor Tlp/WhatsApp <span style="color: red">*</span></label' +
    "        >" +
    "        <input" +
    '          type="noTelp"' +
    '          id="noTelp"' +
    '          name="noTelp"' +
    '          placeholder="Nomor Tlp/WhatsApp"' +
    '          style="' +
    "            width: 100%;" +
    "            padding: 12px 20px;" +
    "            margin: 8px 0;" +
    "            display: inline-block;" +
    "            border: 1px solid #ccc;" +
    "            border-radius: 4px;" +
    "            box-sizing: border-box;" +
    '          "' +
    "        />" +
    '        <label for="industri">Industri Anda</label>' +
    "        <select" +
    '          id="industri"' +
    '          name="industri"' +
    '          style="' +
    "            width: 100%;" +
    "            padding: 12px 20px;" +
    "            margin: 8px 0;" +
    "            display: inline-block;" +
    "            border: 1px solid #ccc;" +
    "            border-radius: 4px;" +
    "            box-sizing: border-box;" +
    '          "' +
    "        >" +
    '          <option value="Industri 1">Industri 1</option>' +
    '          <option value="Industri 2">Industri 2</option>' +
    '          <option value="Indsutri 3">Indsutri 3</option>' +
    "        </select>" +
    '        <label for="industri">Solusi</label>' +
    "        <select" +
    '          id="solusi"' +
    '          name="solusi"' +
    '          style="' +
    "            width: 100%;" +
    "            padding: 12px 20px;" +
    "            margin: 8px 0;" +
    "            display: inline-block;" +
    "            border: 1px solid #ccc;" +
    "            border-radius: 4px;" +
    "            box-sizing: border-box;" +
    '          "' +
    "        >" +
    '          <option value="Solusi 1">Solusi 1</option>' +
    '          <option value="Solusi 2">Solusi 2</option>' +
    '          <option value="Solusi 3">Solusi 3</option>' +
    "        </select>" +
    '        <label for="noTelp"' +
    '          >Tulis Pesan anda <span style="color: red">*</span></label' +
    "        >" +
    "        <textarea" +
    '          name="pesan"' +
    '          id="pesan"' +
    '          cols="30"' +
    '          style="' +
    "            width: 100%;" +
    "            padding: 12px 20px;" +
    "            margin: 8px 0;" +
    "            display: inline-block;" +
    "            border: 1px solid #ccc;" +
    "            border-radius: 4px;" +
    "            box-sizing: border-box;" +
    '          "' +
    '          placeholder="Tulis disini"' +
    '          rows="10"' +
    "        ></textarea>" +
    "        <input" +
    '          type="submit"' +
    '          value="Submit"' +
    '          style="' +
    "            width: 100%;" +
    "            background-color: blue;" +
    "            color: white;" +
    "            padding: 14px 20px;" +
    "            margin: 8px 0;" +
    "            border: none;" +
    "            border-radius: 4px;" +
    "            cursor: pointer;" +
    '          "' +
    "          onmouseover" +
    "        />" +
    "      </form>" +
    "    </div>" +
    "";

  return document.write(testHtml);
}
