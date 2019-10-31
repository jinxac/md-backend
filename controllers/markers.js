const Markers = require("../models").Markers;

module.exports = {
  create(req, res) {
    const {body} = req;
    if (!body) {
      return res.status(400).send({
        message: "Oops! Something went wrong",
        code: "T001"
      });
    }
    const {
      name,
      description,
      placeId,
      lat,
      lng
    } = body;

    if (!description) {
      return res.status(400).send({
        message: "Please pass description...",
        code: "T002"
      });
    }

    if (!placeId) {
      return res.status(400).send({
        message: "Please pass place id...",
        code: "T003"
      });
    }

    if (!lat) {
      return res.status(400).send({
        message: "Please pass lat...",
        code: "T004"
      });
    }

    if (!lng) {
      return res.status(400).send({
        message: "Please pass lng...",
        code: "T005"
      });
    }

    if (!name) {
      return res.status(400).send({
        message: "Please pass name...",
        code: "T006"
      });
    }



    return Markers.create({
      name: name,
      description: description,
      placeId: placeId,
      lat: lat,
      lng: lng,
      createdAt: new Date(),
      updatedAt: null
    })
    .then((marker) => {
      res.status(201).send(marker);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send({
        message: "Test",
        code: "Something went wrong"
      });
    });
  },
  get(req, res) {
    return Markers.findAll()
    .then((markers) => {
      res.status(200).send(markers);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
  },
  update (req, res) {
    const id = req.params.id;
    const placeId = req.body.placeId;
    const lat = req.body.lat;
    const lng = req.body.lng;
    const description = req.body.description;
    const updatedAt = new Date();

    if (!id) {
      return res.status(400).send({
        message: "Please pass id...",
        code: "T007"
      });
    }

    if (!description) {
      return res.status(400).send({
        message: "Please pass description...",
        code: "T002"
      });
    }

    if (!placeId) {
      return res.status(400).send({
        message: "Please pass place id...",
        code: "T003"
      });
    }

    if (!lat) {
      return res.status(400).send({
        message: "Please pass lat...",
        code: "T004"
      });
    }

    if (!lng) {
      return res.status(400).send({
        message: "Please pass lng...",
        code: "T005"
      });
    }

    if (!name) {
      return res.status(400).send({
        message: "Please pass name...",
        code: "T006"
      });
    }

    return Markers.update(
      {
      placeId: placeId,
      lat: lat,
      lng: lng,
      description: description,
      updatedAt:updatedAt
      },
      {
        returning: true,
        where: {
          id: id
        }
      }
    )
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
  },
  delete(req, res) {
    const id = req.params.id;
    if (!id) {
      return res.status(400).send({
        message: "Please pass id...",
        code: "T007"
      });
    }
    return Markers.destroy({
      where: {
        id: id
      }
    })
    .then((result) => {
      res.status(200).send({
        message: "success!!"
      })
    })
    .catch((error) => {
      res.status(400).send(error);
    })
  }
}