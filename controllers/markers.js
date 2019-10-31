const { Markers } = require('../models');

module.exports = {
  create(req, res) {
    const { body } = req;
    if (!body) {
      return res.status(400).send({
        message: 'Oops! Something went wrong',
        code: 'T001',
      });
    }
    /* eslint-disable */
    const {
      name,
      description,
      place_id,
      lat,
      lng,
    } = body;
    /* eslint-enable */

    if (!description) {
      return res.status(400).send({
        message: 'Please pass description...',
        code: 'T002',
      });
    }
    /* eslint-disable */
    if (!place_id) {
      return res.status(400).send({
        message: 'Please pass place id...',
        code: 'T003',
      });
    }
    /* eslint-enable */

    if (!lat) {
      return res.status(400).send({
        message: 'Please pass lat...',
        code: 'T004',
      });
    }

    if (!lng) {
      return res.status(400).send({
        message: 'Please pass lng...',
        code: 'T005',
      });
    }

    if (!name) {
      return res.status(400).send({
        message: 'Please pass name...',
        code: 'T006',
      });
    }


    return Markers.create({
      name,
      description,
      /* eslint-disable */
      place_id,
      /* eslint-enable */
      lat,
      lng,
      createdAt: new Date(),
      updatedAt: null,
    })
      .then((marker) => {
        res.status(201).send(marker);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  get(req, res) {
    return Markers.findAll()
      .then((markers) => {
        res.status(200).send(markers);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  update(req, res) {
    const { id } = req.params;
    /* eslint-disable */
    const { place_id } = req.body;
    /* eslint-enable */

    const { name } = req.body;
    const { lat } = req.body;
    const { lng } = req.body;
    const { description } = req.body;
    const updatedAt = new Date();

    if (!id) {
      return res.status(400).send({
        message: 'Please pass id...',
        code: 'T007',
      });
    }

    if (!description) {
      return res.status(400).send({
        message: 'Please pass description...',
        code: 'T002',
      });
    }

    /* eslint-disable */
    if (!place_id) {
    /* eslint-enable */
      return res.status(400).send({
        message: 'Please pass place id...',
        code: 'T003',
      });
    }

    if (!lat) {
      return res.status(400).send({
        message: 'Please pass lat...',
        code: 'T004',
      });
    }

    if (!lng) {
      return res.status(400).send({
        message: 'Please pass lng...',
        code: 'T005',
      });
    }

    if (!name) {
      return res.status(400).send({
        message: 'Please pass name...',
        code: 'T006',
      });
    }

    return Markers.update(
      {
        name,
        place_id,
        lat,
        lng,
        description,
        updatedAt,
      },
      {
        returning: true,
        where: {
          id,
        },
      },
    )
      .then(() => Markers.findByPk(id))
      .then((result) => res.status(200).send(result))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  delete(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({
        message: 'Please pass id...',
        code: 'T007',
      });
    }
    return Markers.destroy({
      where: {
        id,
      },
    })
      .then(() => {
        res.status(200).send({
          message: 'success!!',
        });
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },
};
