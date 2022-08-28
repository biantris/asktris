import mongoose, { Document, Model } from 'mongoose';

const Schema = mongoose.Schema;

const findingSchema = new Schema({
  type: {
    type: String,
  },
  ruleId: {
    type: String,
  },
  location: {
    path: {
      type: String,
    },
    positions: {
      begin: {
        line: {
          type: Number,
        },
      },
    },
  },
  metadata: {
    description: {
      type: String,
    },
    severity: {
      type: String,
    },
  },
});

const ResultSchema = new Schema(
  {
    repositoryName: {
      type: String,
      required: 'Repository name is required',
    },
    status: {
      type: String,
      required: 'Status is required',
    },
    findings: {
      type: [findingSchema],
    },
    queuedAt: {
      type: Date,
    },
    scanningAt: {
      type: Date,
    },
    finishedAt: {
      type: Date,
    },
  },
  {
    collection: 'Event',
    timestamps: true,
  },
);

export interface IFindings extends Document {
  type: string;
  ruleId: string;
  location: string;
  positions: number;
  metadata: string;
}

export interface IResult extends Document {
  repositoryName: string;
  status: string;
  findings: IFindings;
  queuedAt: Date;
  scanningAt: Date;
  finishedAt: Date;
}

const ResultModel: Model<IResult> = mongoose.model('Result', ResultSchema);

export default ResultModel;
